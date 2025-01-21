import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo30Component } from './lib52-demo30.component';

describe('Lib52Demo30Component', () => {
  let component: Lib52Demo30Component;
  let fixture: ComponentFixture<Lib52Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
