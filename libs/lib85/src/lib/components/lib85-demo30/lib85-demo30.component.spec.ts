import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo30Component } from './lib85-demo30.component';

describe('Lib85Demo30Component', () => {
  let component: Lib85Demo30Component;
  let fixture: ComponentFixture<Lib85Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
