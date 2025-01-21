import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo2Component } from './lib7-demo2.component';

describe('Lib7Demo2Component', () => {
  let component: Lib7Demo2Component;
  let fixture: ComponentFixture<Lib7Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
