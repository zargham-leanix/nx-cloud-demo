import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo30Component } from './lib96-demo30.component';

describe('Lib96Demo30Component', () => {
  let component: Lib96Demo30Component;
  let fixture: ComponentFixture<Lib96Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
