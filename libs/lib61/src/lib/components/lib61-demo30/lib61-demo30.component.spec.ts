import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo30Component } from './lib61-demo30.component';

describe('Lib61Demo30Component', () => {
  let component: Lib61Demo30Component;
  let fixture: ComponentFixture<Lib61Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
