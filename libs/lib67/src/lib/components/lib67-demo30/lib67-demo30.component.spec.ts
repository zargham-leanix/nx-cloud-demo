import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo30Component } from './lib67-demo30.component';

describe('Lib67Demo30Component', () => {
  let component: Lib67Demo30Component;
  let fixture: ComponentFixture<Lib67Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
