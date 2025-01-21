import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo30Component } from './lib74-demo30.component';

describe('Lib74Demo30Component', () => {
  let component: Lib74Demo30Component;
  let fixture: ComponentFixture<Lib74Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
