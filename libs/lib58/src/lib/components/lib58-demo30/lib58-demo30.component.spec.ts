import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo30Component } from './lib58-demo30.component';

describe('Lib58Demo30Component', () => {
  let component: Lib58Demo30Component;
  let fixture: ComponentFixture<Lib58Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
