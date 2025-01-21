import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo10Component } from './lib93-demo10.component';

describe('Lib93Demo10Component', () => {
  let component: Lib93Demo10Component;
  let fixture: ComponentFixture<Lib93Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
