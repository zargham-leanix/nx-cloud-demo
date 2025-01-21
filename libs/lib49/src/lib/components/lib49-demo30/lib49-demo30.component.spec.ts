import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo30Component } from './lib49-demo30.component';

describe('Lib49Demo30Component', () => {
  let component: Lib49Demo30Component;
  let fixture: ComponentFixture<Lib49Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
