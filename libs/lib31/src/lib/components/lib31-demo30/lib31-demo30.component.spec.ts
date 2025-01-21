import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo30Component } from './lib31-demo30.component';

describe('Lib31Demo30Component', () => {
  let component: Lib31Demo30Component;
  let fixture: ComponentFixture<Lib31Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
