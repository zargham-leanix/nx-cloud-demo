import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo30Component } from './lib66-demo30.component';

describe('Lib66Demo30Component', () => {
  let component: Lib66Demo30Component;
  let fixture: ComponentFixture<Lib66Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
