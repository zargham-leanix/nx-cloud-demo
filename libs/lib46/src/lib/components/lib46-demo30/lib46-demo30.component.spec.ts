import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo30Component } from './lib46-demo30.component';

describe('Lib46Demo30Component', () => {
  let component: Lib46Demo30Component;
  let fixture: ComponentFixture<Lib46Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
