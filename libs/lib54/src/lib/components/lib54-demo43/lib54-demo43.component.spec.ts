import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo43Component } from './lib54-demo43.component';

describe('Lib54Demo43Component', () => {
  let component: Lib54Demo43Component;
  let fixture: ComponentFixture<Lib54Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
