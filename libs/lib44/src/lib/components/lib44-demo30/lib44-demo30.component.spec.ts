import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo30Component } from './lib44-demo30.component';

describe('Lib44Demo30Component', () => {
  let component: Lib44Demo30Component;
  let fixture: ComponentFixture<Lib44Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
