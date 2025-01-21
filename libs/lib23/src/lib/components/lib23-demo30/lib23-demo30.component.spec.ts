import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo30Component } from './lib23-demo30.component';

describe('Lib23Demo30Component', () => {
  let component: Lib23Demo30Component;
  let fixture: ComponentFixture<Lib23Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
