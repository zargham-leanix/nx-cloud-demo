import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo30Component } from './lib15-demo30.component';

describe('Lib15Demo30Component', () => {
  let component: Lib15Demo30Component;
  let fixture: ComponentFixture<Lib15Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
