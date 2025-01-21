import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo30Component } from './lib75-demo30.component';

describe('Lib75Demo30Component', () => {
  let component: Lib75Demo30Component;
  let fixture: ComponentFixture<Lib75Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
