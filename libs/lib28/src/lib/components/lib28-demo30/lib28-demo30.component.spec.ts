import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo30Component } from './lib28-demo30.component';

describe('Lib28Demo30Component', () => {
  let component: Lib28Demo30Component;
  let fixture: ComponentFixture<Lib28Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
