import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo30Component } from './lib55-demo30.component';

describe('Lib55Demo30Component', () => {
  let component: Lib55Demo30Component;
  let fixture: ComponentFixture<Lib55Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
