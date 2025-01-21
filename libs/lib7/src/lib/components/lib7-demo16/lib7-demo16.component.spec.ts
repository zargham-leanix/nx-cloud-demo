import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo16Component } from './lib7-demo16.component';

describe('Lib7Demo16Component', () => {
  let component: Lib7Demo16Component;
  let fixture: ComponentFixture<Lib7Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
