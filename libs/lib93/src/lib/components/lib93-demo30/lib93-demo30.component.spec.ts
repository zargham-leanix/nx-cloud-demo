import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo30Component } from './lib93-demo30.component';

describe('Lib93Demo30Component', () => {
  let component: Lib93Demo30Component;
  let fixture: ComponentFixture<Lib93Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
