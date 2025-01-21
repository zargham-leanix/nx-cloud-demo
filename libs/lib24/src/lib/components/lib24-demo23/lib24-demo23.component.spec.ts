import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo23Component } from './lib24-demo23.component';

describe('Lib24Demo23Component', () => {
  let component: Lib24Demo23Component;
  let fixture: ComponentFixture<Lib24Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
