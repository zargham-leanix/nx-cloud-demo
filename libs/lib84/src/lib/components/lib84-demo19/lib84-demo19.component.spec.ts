import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo19Component } from './lib84-demo19.component';

describe('Lib84Demo19Component', () => {
  let component: Lib84Demo19Component;
  let fixture: ComponentFixture<Lib84Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
