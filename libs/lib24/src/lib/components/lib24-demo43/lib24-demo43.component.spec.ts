import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo43Component } from './lib24-demo43.component';

describe('Lib24Demo43Component', () => {
  let component: Lib24Demo43Component;
  let fixture: ComponentFixture<Lib24Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
