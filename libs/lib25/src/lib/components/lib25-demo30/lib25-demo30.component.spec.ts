import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo30Component } from './lib25-demo30.component';

describe('Lib25Demo30Component', () => {
  let component: Lib25Demo30Component;
  let fixture: ComponentFixture<Lib25Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
