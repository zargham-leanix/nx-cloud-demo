import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo30Component } from './lib63-demo30.component';

describe('Lib63Demo30Component', () => {
  let component: Lib63Demo30Component;
  let fixture: ComponentFixture<Lib63Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
