import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo40Component } from './lib7-demo40.component';

describe('Lib7Demo40Component', () => {
  let component: Lib7Demo40Component;
  let fixture: ComponentFixture<Lib7Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
