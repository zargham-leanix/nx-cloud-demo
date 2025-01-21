import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo30Component } from './lib11-demo30.component';

describe('Lib11Demo30Component', () => {
  let component: Lib11Demo30Component;
  let fixture: ComponentFixture<Lib11Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
