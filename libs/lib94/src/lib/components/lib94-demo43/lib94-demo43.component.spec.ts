import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo43Component } from './lib94-demo43.component';

describe('Lib94Demo43Component', () => {
  let component: Lib94Demo43Component;
  let fixture: ComponentFixture<Lib94Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
