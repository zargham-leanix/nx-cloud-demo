import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo30Component } from './lib78-demo30.component';

describe('Lib78Demo30Component', () => {
  let component: Lib78Demo30Component;
  let fixture: ComponentFixture<Lib78Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
