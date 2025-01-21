import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo30Component } from './lib59-demo30.component';

describe('Lib59Demo30Component', () => {
  let component: Lib59Demo30Component;
  let fixture: ComponentFixture<Lib59Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
