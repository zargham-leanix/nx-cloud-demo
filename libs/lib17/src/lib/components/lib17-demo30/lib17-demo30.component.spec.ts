import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo30Component } from './lib17-demo30.component';

describe('Lib17Demo30Component', () => {
  let component: Lib17Demo30Component;
  let fixture: ComponentFixture<Lib17Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
