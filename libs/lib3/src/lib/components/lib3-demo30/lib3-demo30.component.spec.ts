import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo30Component } from './lib3-demo30.component';

describe('Lib3Demo30Component', () => {
  let component: Lib3Demo30Component;
  let fixture: ComponentFixture<Lib3Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
