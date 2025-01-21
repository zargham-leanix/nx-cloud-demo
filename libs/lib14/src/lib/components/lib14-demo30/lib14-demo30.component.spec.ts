import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo30Component } from './lib14-demo30.component';

describe('Lib14Demo30Component', () => {
  let component: Lib14Demo30Component;
  let fixture: ComponentFixture<Lib14Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
