import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo30Component } from './lib84-demo30.component';

describe('Lib84Demo30Component', () => {
  let component: Lib84Demo30Component;
  let fixture: ComponentFixture<Lib84Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
