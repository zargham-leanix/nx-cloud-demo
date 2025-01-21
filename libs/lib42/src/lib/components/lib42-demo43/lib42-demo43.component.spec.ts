import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo43Component } from './lib42-demo43.component';

describe('Lib42Demo43Component', () => {
  let component: Lib42Demo43Component;
  let fixture: ComponentFixture<Lib42Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
