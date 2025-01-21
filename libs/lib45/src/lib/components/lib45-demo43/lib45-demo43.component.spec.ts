import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo43Component } from './lib45-demo43.component';

describe('Lib45Demo43Component', () => {
  let component: Lib45Demo43Component;
  let fixture: ComponentFixture<Lib45Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
