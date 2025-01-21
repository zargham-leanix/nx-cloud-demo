import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo43Component } from './lib86-demo43.component';

describe('Lib86Demo43Component', () => {
  let component: Lib86Demo43Component;
  let fixture: ComponentFixture<Lib86Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
