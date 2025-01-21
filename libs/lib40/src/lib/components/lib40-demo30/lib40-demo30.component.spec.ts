import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo30Component } from './lib40-demo30.component';

describe('Lib40Demo30Component', () => {
  let component: Lib40Demo30Component;
  let fixture: ComponentFixture<Lib40Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
