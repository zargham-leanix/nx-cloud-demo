import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo43Component } from './lib64-demo43.component';

describe('Lib64Demo43Component', () => {
  let component: Lib64Demo43Component;
  let fixture: ComponentFixture<Lib64Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
