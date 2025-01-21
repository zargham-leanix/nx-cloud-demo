import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo30Component } from './lib77-demo30.component';

describe('Lib77Demo30Component', () => {
  let component: Lib77Demo30Component;
  let fixture: ComponentFixture<Lib77Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
