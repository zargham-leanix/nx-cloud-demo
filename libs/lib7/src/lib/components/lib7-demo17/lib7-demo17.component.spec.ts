import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo17Component } from './lib7-demo17.component';

describe('Lib7Demo17Component', () => {
  let component: Lib7Demo17Component;
  let fixture: ComponentFixture<Lib7Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
