import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo30Component } from './lib8-demo30.component';

describe('Lib8Demo30Component', () => {
  let component: Lib8Demo30Component;
  let fixture: ComponentFixture<Lib8Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
