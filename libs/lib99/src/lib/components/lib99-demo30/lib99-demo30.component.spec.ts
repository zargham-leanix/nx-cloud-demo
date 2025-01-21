import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo30Component } from './lib99-demo30.component';

describe('Lib99Demo30Component', () => {
  let component: Lib99Demo30Component;
  let fixture: ComponentFixture<Lib99Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
