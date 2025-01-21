import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo10Component } from './lib24-demo10.component';

describe('Lib24Demo10Component', () => {
  let component: Lib24Demo10Component;
  let fixture: ComponentFixture<Lib24Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
