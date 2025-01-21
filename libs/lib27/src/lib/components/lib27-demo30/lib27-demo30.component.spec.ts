import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo30Component } from './lib27-demo30.component';

describe('Lib27Demo30Component', () => {
  let component: Lib27Demo30Component;
  let fixture: ComponentFixture<Lib27Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
