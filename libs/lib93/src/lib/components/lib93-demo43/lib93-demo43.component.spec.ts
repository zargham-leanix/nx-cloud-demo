import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo43Component } from './lib93-demo43.component';

describe('Lib93Demo43Component', () => {
  let component: Lib93Demo43Component;
  let fixture: ComponentFixture<Lib93Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
