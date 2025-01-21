import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo30Component } from './lib41-demo30.component';

describe('Lib41Demo30Component', () => {
  let component: Lib41Demo30Component;
  let fixture: ComponentFixture<Lib41Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
