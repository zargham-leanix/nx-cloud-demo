import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo30Component } from './lib88-demo30.component';

describe('Lib88Demo30Component', () => {
  let component: Lib88Demo30Component;
  let fixture: ComponentFixture<Lib88Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
