import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo30Component } from './lib91-demo30.component';

describe('Lib91Demo30Component', () => {
  let component: Lib91Demo30Component;
  let fixture: ComponentFixture<Lib91Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
