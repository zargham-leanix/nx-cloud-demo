import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo43Component } from './lib14-demo43.component';

describe('Lib14Demo43Component', () => {
  let component: Lib14Demo43Component;
  let fixture: ComponentFixture<Lib14Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
