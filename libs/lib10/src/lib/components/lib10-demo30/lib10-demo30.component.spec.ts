import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo30Component } from './lib10-demo30.component';

describe('Lib10Demo30Component', () => {
  let component: Lib10Demo30Component;
  let fixture: ComponentFixture<Lib10Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
