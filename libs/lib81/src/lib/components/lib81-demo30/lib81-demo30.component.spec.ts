import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo30Component } from './lib81-demo30.component';

describe('Lib81Demo30Component', () => {
  let component: Lib81Demo30Component;
  let fixture: ComponentFixture<Lib81Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
